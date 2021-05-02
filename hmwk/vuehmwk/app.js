const app = Vue.createApp({
    data : function() {
        return {
            coursesData: [],
            pickedCrn: "",
            pickedTitle: "",
            pickedProffesor: "",
            pickedDay: "",


        }
    },
    methods :{

    },
    created() {
        fetch("./sections.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            this.coursesData = data;
            return data;
        })
        .catch((err) => {
            console.log(err);
        });
    },
    computed: {
        pickedselection: function() {
            selection = this.coursesData.filter( course =>
                course.title.toLowerCase().includes(this.pickedTitle.toLowerCase()));  // filter by course title
            selection = selection.filter(course =>
                course.instructor.toLowerCase().includes(this.pickedProffesor.toLowerCase())); // Filter by instructors
            selection = selection.filter( course =>
                    course.crn.toLowerCase().includes(this.pickedCrn.toLowerCase())); // filter by CRN
            selection = selection.filter( course =>
                        course.meetings[0].day.toLowerCase().includes(this.pickedDay.toLowerCase())); // filter by Day[0]
            return selection;
        }
    },
    mounted() {
   
        },
})
app.mount("#appArea");