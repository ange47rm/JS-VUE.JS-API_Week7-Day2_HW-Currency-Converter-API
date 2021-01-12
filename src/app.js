import Vue from 'vue';

document.addEventListener ('DOMContentLoaded', function (){

    new Vue ({
        el: '#app',                                 // (1) REFER VUE OBJECT TO #APP DIV
        data: {
            exchangeRates: []
        },
        
        mounted: function () {                      // (3) lifecycle HOOK - the mounted is run as soon as the Vue object is created
            this.getExchangeRates();                // this means the function getExchangeRates is run as the Vue object and exchangeRates are loaded
        },
        
        methods: {
            getExchangeRates: function (){
                fetch('https://api.exchangeratesapi.io/latest')                 // (2) We pass in the external API endpoint to get exchange rates
                .then ( rates => rates.json())                                  // turn the result of fetch request into .json format
                .then ( processedData => this.exchangeRates = processedData)    // take the rates now in json format and assign them to our VUE's exchangeRates
            }}

        }
    )
})