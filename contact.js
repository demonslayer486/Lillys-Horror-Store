document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const fullName = formData.get("fullname");
    const email = formData.get("email");
    const reason = formData.get("reason");
    const content = formData.get("content");

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    // Determine color based on reason
    let color;
    switch (reason) {
        case "General Inquiry":
            color = 0x28a745; // Green
            break;
        case "Support":
            color = 0x007bff; // Blue
            break;
        case "Feedback":
            color = 0x6f42c1; // Purple
            break;
        case "Other":
            color = 0xdc3545; // Red
            break;
        default:
            color = 0x007bff; // Default color
    }
    
    // Construct embed object
    const embed = {
        title: reason, // Use reason as the title
        color: color,
        fields: [
            { name: "Full Name", value: fullName, inline: true },
            { name: "Email Address", value: email, inline: true },
            { name: "Content", value: content }
        ]
    };
    
    // Send data to Discord webhook
    const webhookURL = "https://discord.com/api/webhooks/1245472490726363147/7YXIafOWOYyifrQzAJG9a2AY-xMJTUfUshP5P4d9ZUZXB0c2hGjkrlJWv_0rgs9EJBi3";
    const payload = {
        embeds: [embed]
    };
    
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to send message");
        }
        alert("✅ Message sent successfully!");
        // Clear form fields
        event.target.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("⚠️ Failed to send message. Please try again later.");
    });
});
