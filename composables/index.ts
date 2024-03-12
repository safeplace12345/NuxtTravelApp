let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json",
};

const url = "https://travelersapi.adaptable.app/graphql";

let gqlBody: any = {
  query: `{
    users {
      name
      id
      email
    }
  }`,
};

const sendReq = async (body: any) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headersList,
    });

    const data = await response.json();
    if (data.errors) {
      console.log(data.errors)
    }
    return await data.data
  } catch (error) {
    console.log(error)
  }
}

export const getUsers = async () => {
  return sendReq(gqlBody)
};

export const getUser = async (email: string) => {
  gqlBody = {
    query: `{
      user(email: "${email}") {
        id
        email
        name
      }
   }`,
  };

  return sendReq(gqlBody)
};

export const createUser = async (email: string, name: string) => {
  gqlBody = {
    query: `mutation {
      create (createUserInput: {email: "${email}", name: "${name}"}){
      id
      email
      name
    }
   }`,
  };

  return await sendReq(gqlBody.query)
};

export const getDestination = async (travelId: string) => {
  gqlBody = {
    query: `{
      travel (travelId:"${travelId}"){
        id
        name
        price
        description
        startingDate
        endingDate
        moods {
          nature
          relax
          history
          culture
          party
        }
      }
   }`,
  };

  return sendReq(gqlBody)
};
export const getDestinations = async () => {
  gqlBody = {
    query: `{
      travels {
        id
        slug
        price
        description
        startingDate
        endingDate
        moods {
          nature
          relax
          history
          culture
          party
        }
      }
   }`,
  };

  return await sendReq(gqlBody)
};

export const makeBooking = async (email: string, travelId: string, numOfSeats: number) => {
  gqlBody = {
    query: `mutation{
      book(
        createBooking: {
          email: "${email}"
          travelId: "${travelId}"
          numOfSeats: ${numOfSeats}
        }
      ) {
        email
        orders {
          id
          numOfSeats
        }
      }
   }`,
  };

  return sendReq(gqlBody)
};

export const checkout = async (checkout: checkOut) => {
  const { email, orders, amount } = checkout
  const converted = orders.map(o => (`{ id: "${o.id}", numOfSeats: ${o.numOfSeats} }`))

  const gqlBody = {
    query: `mutation {
    checkOut(
      checkout: {
          email: "${email}"
          orders: [${[...converted]}]
          amount: ${amount}
        }
      ) {
        email
        orders {
          numOfSeats
          id
        }
      }
    }`,
  };

  return sendReq(gqlBody)
};

