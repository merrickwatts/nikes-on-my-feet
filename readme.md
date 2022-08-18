
# Nikes On My Feet

This was a project designed around the current business of a colleague
they are excellent at creating custom Nike shoes. This website was
designed to showcase those shoes and allow potential customers
to browse those shoes and also buy them. The website features the
ability to leave comments on shoes to share your thoughts.



## Features

This project includes a react front end for quick responsive load times
as well as an express server backend. The server uses mongoose and
apollo servers.


## Lessons Learned

This was the most challenging project I have worked on yet.
The challenges of both new technologies as well as getting the 
client and server to work together help me to learn a lot and feel out new technologies.
I enjoyed the challenges however and would love to continue to
work with the technologies.


## Authors

- [@merrickwatts](https://github.com/merrickwatts)
- [@Shmeeheart](https://github.com/Shmeeheart)
- [@JaydenCowley](https://github.com/JaydenCowley)
- [@DawnWogerman](https://github.com/DawnWogerman)


## Screenshots

![App Screenshot](https://github.com/merrickwatts/Portfolio-2.0/blob/main/src/assets/images/nikes-on-my-feet.png?raw=true)


## Usage/Examples
An example of some one of our react components can be seen below:

```javascript
export default function Home() {
  const { loading, data } = useQuery(QUERY_SHOES);
  const shoes = data?.shoes || [];

  return (
    <main>
      {shoes.map((e) => {
        console.log(e);
        return (
          <ShoeCard
            shoeId={e._id}
            shoeName={e.shoe_name}
            shoePrice={e.price}
            shoeDisc={e.shoe_description}
            shoeSize={e.shoe_size}
            photo={e.photo_ref}
            gender={e.gender}
            review={e.reviews}
          />
        );
      })}
    </main>
  );
}
```


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://merrickwatts.github.io/Portfolio-2.0/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/merrick-watts-9331241ab/)
[[Github Repo]](https://github.com/merrickwatts/nikes-on-my-feet)