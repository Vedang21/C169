AFRAME.registerCmponent("markerHandler",{
    init:async function(){
        this.el.addEventListner("markerFound",()=>{
            this.handleMarkerFound
        })
        this.el.addEventListner("markerLost",()=>{
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")

        ratingButton.addEventListner("click",function(){
            swal({
                icon:"warning",
                title:"rate dish",
                text:"work in progress",
            })
        })

        orderButton.addEventListner("click",function(){
            swal({
                icon:"https://imgur.com/4NZ6uLY.jpg",
                title:"Thanks For Ordering",
                text:"Your Order Will Be Served Soon At YOUR Table",
            })
        })

    },

    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    }

})