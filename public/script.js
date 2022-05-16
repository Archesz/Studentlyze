const { exec } = require('child_process')

function teste(){  
    const command = exec("node -v")

    command.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    
    console.log('okkkk')
}
