let modal = document.getElementById('simpleModal'),
    mainBody=document.getElementsByTagName('body'),
    modalBtn = document.getElementById('Btn'),
    closeBtn = document.getElementById('close');
    

    modalBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', clickOutside);


    window.addEventListener('load',  hideClose);

    // window.onload(hideClose);

    function openModal(){
        modal.style.display = 'block';
        closeBtn.style.display = 'block';
        modalBtn.style.display = 'none';
        // mainBody.style.display = 'none';
    }

    function closeModal(){
        modal.style.display = 'none';
        closeBtn.style.display = "none"
        modalBtn.style.display = 'block';
    }

    function clickOutside(e){
        if(e.target == modal ){
            modal.style.display = 'none';
            modalBtn.style.display = 'block';
            mockUp.style.display = 'block';
            closeBtn.style.display = "none"
        }
    }

    function hideClose() {
        closeBtn.style.display = "none"
    }