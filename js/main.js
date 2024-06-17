const {
    createApp
} = Vue

createApp({
    data() {
        return {
            user: "Germana",
            avatar: `./img/avatar_io.jpg`,
            contacts: [{
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [{
                            date: '03/20/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '03/20/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '03/20/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [{
                            date: '03/28/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '03/28/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '03/28/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeContact: 0,
            userInput: "",
            contactInput: "",
            dropNascondi: "",
            responses: [{
                    message: "bello bro!",
                },
                {
                    message: "com'è??",
                },
                {
                    message: "che fai??",
                },
                {
                    message: "sei a casa?",
                },
            ],
            isModalOpen: false,
            emojis: [
                '😊',
                '😂',
                '🤣',
                '❤️',
                '😁',
                '😍',
                '😒',
                '👌',
                '👍',
                '🙌',
                '💕',
            ]
        }
    },
    methods: {
        attivatore(i) {
            this.activeContact = i;
            console.log(this.activeContact);
        },
        changeActive(i) {
            if (this.activeContact == i) {
                return "active"
            }
        },
        stampaMex(element) {
            if (element.status == "sent") {
                return "justify-content-end"
            } else {
                return ""
            }
        },
        contactSerch(x, i) {
            let j = this.contacts[i].name.toLowerCase();
            if (j.startsWith(this.contactInput)) {
                return ""
            } else {
                return "d-none"
            }
        },
        faiCose(i, x) {
            console.log("primo valore", x, "secondo valore", i);
            const removed = x.splice(i, 1);
            return x
        },
        ultimateMex(x) {
            for (let i = x.length - 1; i > 0; i--) {
                const mex = x[i];
                // if (mex.status == 'received') {
                //     return mex.message
                // }
                if (mex.message) {
                    return mex.message
                }

            }
        },
        date(x) {
            if (x.date) {
                let date = new Date(x.date);
                let h = date.getHours();
                let m = date.getMinutes();
                return h + ':' + m
            } else {
                let date = new Date();
                let h = date.getHours();
                let m = date.getMinutes();
                return h + ':' + m
            }
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        invio() {
            const miCopioLaConversazioneAttiva = this.activeContact;
            this.contacts[this.activeContact].messages.push({
                message: this.userInput,
                status: "sent"
            });
            let random = this.getRandomInt(4);
            let resp = this.responses[random];
            this.userInput = "",
                setTimeout(() => {
                    this.contacts[miCopioLaConversazioneAttiva].messages.push({
                        message: resp.message,
                        status: "received"
                    });
                }, 1000);
        },
        emojiMethod(x){
            this.userInput = this.userInput + x
        }
    },
    mounted() {
        window.vue = this;
    }
}).mount('#app')