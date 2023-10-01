import React from 'react'

const PhpCors = () => {

  function getPHP() {
    var formData = new FormData()
    formData.append('content', 'test2')
    fetch(`http://localhost/php_cors/api/demo.php`, {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/json',
      },
      body: formData
    }).then(res => res.json())
      .then(response => {
        console.log('response:');
        console.log(response);
      })
  }

  return (
    <div>
      <p className='text-3xl'>Carlos</p>
      <button onClick={getPHP}>
        Loaded
      </button>
    </div>
  )
}

export default PhpCors