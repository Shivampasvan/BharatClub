import { Box, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box
        style={{
          margin: "auto",
          textAlign: "center",
          width: "50%",
          lineHeight: 1,
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        <Text
          style={{ fontSize: "52px", fontWeight: 800, fontStyle: "roboto" }}
        >
          Bharat Club
          <br />
          <span
            style={{ color: "whitesmoke", fontSize: "36px", fontWeight: 600 }}
          >
            Colour Prediction App
          </span>
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
        justifyContent={"space-between"}
        // border={"2px solid red"}
        margin={"auto"}
        width={"50%"}
        gap={10}
      >
        <button
          class="button-85"
          role="button"
          style={{ margin: "auto", fontSize: 20, fontWeight: 600 }}
        >
          LogIn
        </button>
        <button
          class="button-85"
          role="button"
          style={{ margin: "auto", fontSize: 20, fontWeight: 600 }}
        >
          Register
        </button>
      </SimpleGrid>

      <Box width={"70%"} margin={"auto"} textAlign={"center"} my={10}>
        <Text fontSize={22}>
          A multi-gaming niche platform where you can play and make money is the
          Bharat Club. The Bharat Club App has included ten gaming categories,
          which are Original games, Slot games, Colour Prediction games, eSports
          games, Live Video games, Chess games, e-tournament games, Fishing
          games, and Card games. Therefore, the Bharat Club app is really a
          multi-gaming niche platform.
        </Text>
      </Box>

      <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
      width={'70%'}
      margin={'auto'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box justifyContent="center" alignItems="center">
        <Image src="bharatclub.jpeg" alt="BHARAT CLUB" height={270} />
      </Box>

      <Box justifyContent="center" alignItems="center" >
        <table
          style={{
            border: "1px solid white",
            borderCollapse: "collapse",
            width: "100%",
            height: 'auto'
          }}
        >
          <tbody>
            <tr>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              App Name
              </td>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              Bharat Club App
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              Invite Code To Register	
              </td>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              67526237675
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              Gaming Categories	              </td>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              10
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              Bharat Club APK Size	              </td>
              <td style={{ border: "1px solid white", padding: "8px" }}>
              18.8 MB
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </SimpleGrid>

    <Box width={"80%"} margin={"auto"} textAlign={"center"} my={10}>
        <Text fontSize={22}>
        For customer support or promotion related query, message Aryah – <Link>https://t.me/AryahVIPBharatAccount</Link>
        </Text>
      </Box>

      <Box textAlign={'center'} marginTop={5} marginBottom={10}>
      <button
          class="button-85"
          role="button"
          style={{ fontSize: 20, fontWeight: 600 }}
        >
          Register Now on Bharat Club App
        </button>
      </Box>


      <Box justifyContent="center" alignItems="center">
        <Image src="banner.jpeg" alt="BHARAT CLUB BANNER" margin={'auto'}/>
      </Box>
    </div>
  );
}

export default App;
