import axios from 'axios'
import React, { useState, useEffect } from 'react'
import XMLParser from 'react-xml-parser'
import Tabelle from './Tabelle'
import Search from './Search'


const Suchleiste = () => {
  //1. setear los hooks
  const [search, setSearch] = useState("")
  const [universum, setUniversum] = useState([])
  const [selected, setSelected] = useState(null)
  const [stamm, setStamm] = useState([])

  //Acordion
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  //2. funcion para traer los datos UNIVERSUM
  const endpointUniversum = 'https://chart.edisoft.de/pub_Request.php?Token=C0791E24-CC6B-4CC2-8C85-982F977BC5BE&Service=UNIVERSUM'
  const linkStamm = "https://chart.edisoft.de/pub_Request.php?Token=C0791E24-CC6B-4CC2-8C85-982F977BC5BE&Service=Stammdaten&ISIN="



  async function showData() {

    async function uni() {
      const res = await axios.get(endpointUniversum)
      var json = new XMLParser().parseFromString(res.data)
      //console.log(json.children[0].children); // Universum in Json  
      return (json.children[0].children)
    }

    const uli = await uni()

    //Promise.all(universum.map(uni => { return axios.get(linkStamm + uni.attributes.ISIN) }))
    Promise.all(uli.map(uni => { return axios.get(linkStamm + uni.attributes.ISIN) }))
      .then(alleFondsXML => {
        //console.log(alleFondsXML)

        // Convierte todos los Fonds de XML a Json 
        const array = alleFondsXML.map(fonds => {
          const fondsJson = new XMLParser().parseFromString(fonds.data)

          //console.log(fondsJson) // Jede Fonds in Json

          //Mapea un objeto, selecciona los datos necesarios y los mete en un nuevo onjeto
          const newObjet = {}
          fondsJson.children[0].children.map((child) => {
            switch (child.name) {

              case "Static":
                newObjet.Static = {
                  Name: child.attributes.Name,
                  ISIN: child.attributes.ISIN,
                  Domizil: child.attributes.Domizil,
                  FondsWaehrung: child.attributes.FondsWaehrung,
                  Gesellschaft: child.attributes.Gesellschaft,
                  FondsManager: child.attributes.FondsManager,
                  Auflegung: child.attributes.Auflegung
                }
                break;

              case "Kennzahlen":
                newObjet.Kennzahlen = {
                  Stand: child.attributes.Stand,
                  Perf_lfd_Jahr: child.attributes.Perf_lfd_Jahr,
                  Perf_pa_1_Jahr: child.attributes.Perf_pa_1_Jahr,
                  Perf_pa_3_Jahre: child.attributes.Perf_pa_3_Jahre,
                  Perf_pa_5_Jahre: child.attributes.Perf_pa_5_Jahre,
                  Perf_pa_10_Jahre: child.attributes.Perf_pa_10_Jahre,
                  Perf_pa_Auflage: child.attributes.Perf_pa_Auflage
                }
                break;

              case "Assets":
                newObjet.Assets = {
                }
                //console.log(child.children)  
                child.children.map((childrin) => {
                  //console.log(childrin)
                  switch (childrin.attributes.Name) {
                    case "Wertpapiere":
                      newObjet.Assets.Wertpapiere = childrin.children.map((chil) => {
                        const obj = {
                          Name: chil.attributes.Name,
                          Wert: chil.attributes.Wert
                        }
                        return obj
                      })
                      break;

                    case "Branchen":
                      newObjet.Assets.Branchen = childrin.children.map((chil) => {
                        const obj = {
                          Name: chil.attributes.Name,
                          Wert: chil.attributes.Wert
                        }
                        return obj
                      })
                      break;

                    case "Länder":
                      newObjet.Assets.Länder = childrin.children.map((chil) => {
                        const obj = {
                          Name: chil.attributes.Name,
                          Wert: chil.attributes.Wert
                        }
                        return obj
                      })
                      break;
                  }
                })

                break;

            } //ende switch
          }) //ende Map - 

          return newObjet
        })

        setStamm(array)

      }) //ende Promise.then

  } //ende showData
console.log(stamm)
  useEffect(() => {
    showData()
  }, [])


  //console.log(stamm)

  // 3. funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  // 4. Filtrar los datos
  //const results = !search ? universum : universum.filter((val) => val.attributes.Name.toLowerCase().includes(search.toLocaleLowerCase()))

  const results = !search ? stamm : stamm.filter((val) => val.Static.Name.toLowerCase().includes(search.toLocaleLowerCase()))
  return (
    <>

      <div className='pl-[15px] pr-[15px] font-metricRegular text-sm sm:text-base md:text-lg' >
        <Search search={search} searcher={searcher} />
        <Tabelle selected={selected} results={results} toggle={toggle} />
      </div>

    </>
  )
}

export default Suchleiste