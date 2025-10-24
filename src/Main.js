function Main() {
  return (
<main>
        <h1>Table Resevations</h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name"></input>
          
          <label>Date</label>
          <input type="date"></input>
          
          <label>Time</label>
          <input type="time"></input>
          
          <label>Number of guests</label>
          <input type="number" min="1" max="20" placeholder="1"></input>
          
          <label>Number of Children</label>
          <input type="number" min="1" max="20" placeholder="1"></input>

          <label>Occasion</label>
          <select>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number"></input>
          <label>Email</label>
          <input type="email" placeholder="Enter your email"></input>

          <button type="submit">Make Resevation</button>
        </form>
      </main>
    );
}

export default Main;