function sendMail(ideaForm) {
    emailjs
        .send("gmail", "leaguelore", {
            from_name: ideaForm.name.value,
            from_email: ideaForm.emailaddress.value,
            idea_suggestions: ideaForm.idea.value,
        })
        .then(
            //When email sends.
            function(response) {
                console.log("SUCCESS", response);
                let load = document.getElementById("submitbutton").innerHTML;
                let done = load.replace("Send us your ideas", "Sent!");
                document.getElementById("submitbutton").innerHTML = done;
                document.getElementById("submitbutton").disabled = true;
                document.getElementById("idea").reset();
            },
            //If email doesn't send.
            function(error) {
                console.log("FAILED", error);
                let load = document.getElementById("submitbutton").innerHTML;
                let fail = load.replace("Send us your ideas", "Try Again Later");
                document.getElementById("submitbutton").innerHTML = fail;
            }
        );

    //Avoid reloading page after email has been sent.
    return false;
}