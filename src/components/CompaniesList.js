import Card from 'react-bootstrap/Card';

function CompaniesList() {
  const companies_list = [
    {
      name: "IBM",
      text: "The International Business Machines Corporation, nicknamed Big Blue, is an American multinational technology corporation headquartered in Armonk, New York and present in over 175 countries."
    },
    {
      name: "Infosys",
      text: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services."
    },
    {
      name: "Apple",
      text: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California. Apple is the world's largest technology company by revenue, with US$394.3 billion in 2022 revenue."
    },
    {
      name: "Accenture",
      text : "Accenture plc is an Irish-American professional services company based in Dublin, specializing in information technology services and consulting. A Fortune Global 500 company, it reported revenues of $61.6 billion in 2022. "
    }
  ]
  return (
    <>
      <div class="container">
        <div class="row">
          {companies_list.map((item, index) => (
            <div class="col-md-3" key={index}>
              <Card style={{ width: '19rem', height: '20rem' }} class="card mb-3">
                <Card.Body>
                  <Card.Title style={{ color: "black", fontSize: "bold" }}>{item.name}</Card.Title>
                  <Card.Text style={{ height: 200 }} class="mt-3">{item.text}</Card.Text>
                  <Card.Link href="#">Company Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default CompaniesList