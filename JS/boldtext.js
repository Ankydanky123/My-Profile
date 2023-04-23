function boldtext(data){
    if(data=='contact'){

        document.getElementById('contactnav').className='nav-item active'
        document.getElementById('educationnav').className='nav-item'
        document.getElementById('skillsnav').className='nav-item'
        document.getElementById('aboutnav').className='nav-item'
        document.getElementById('homenav').className='nav-item'
    }
    if(data=='education'){

        document.getElementById('contactnav').className='nav-item'
        document.getElementById('educationnav').className='nav-item active'
        document.getElementById('skillsnav').className='nav-item'
        document.getElementById('aboutnav').className='nav-item'
        document.getElementById('homenav').className='nav-item'
    }
    if(data=='home'){

        document.getElementById('contactnav').className='nav-item'
        document.getElementById('educationnav').className='nav-item'
        document.getElementById('skillsnav').className='nav-item'
        document.getElementById('aboutnav').className='nav-item'
        document.getElementById('homenav').className='nav-item active'
    }
    if(data=='skills'){

        document.getElementById('contactnav').className='nav-item'
        document.getElementById('educationnav').className='nav-item'
        document.getElementById('skillsnav').className='nav-item active'
        document.getElementById('aboutnav').className='nav-item'
        document.getElementById('homenav').className='nav-item'
    }
    if(data=='about'){

        document.getElementById('contactnav').className='nav-item'
        document.getElementById('educationnav').className='nav-item'
        document.getElementById('skillsnav').className='nav-item'
        document.getElementById('aboutnav').className='nav-item active'
        document.getElementById('homenav').className='nav-item'
    }
}