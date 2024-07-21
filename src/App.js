import { Box, Button, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box
        style={{
          margin: "auto",
          textAlign: "center",
          lineHeight: 1,
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        <Text
          fontSize={{ base: "30px", sm: "30px", md: "40px", lg: "52px" }}
          fontWeight={800}
          fontStyle= {"roboto"}
        >
          Bharat Club
          <br />
          <span
            style={{ color: "whitesmoke"}}
            fontSize={{base:'20px', sm:'28px', md:'28px', lg:'36px'}}
          >
            Colour Prediction App
          </span>
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
        justifyContent={"space-between"}
        margin={"auto"}
        width={"50%"}
        gap={{base:6, sm:6, md:0, lg:0}}
        textAlign={"center"}
      >
        <Link
          href="https://bharatclub.net/#/register?invitationCode=84682491075"
          isExternal
        >
          <Button
            class="button-85"
            role="button"
            style={{ margin: "auto", fontSize: 16, fontWeight: 600 }}
          >
            LogIn
          </Button>
        </Link>

        <Link
          href="https://bharatclub.net/#/register?invitationCode=84682491075"
          isExternal
        >
          <Button
            class="button-85"
            role="button"
            style={{ margin: "auto", fontSize: 16, fontWeight: 600 }}
          >
            Register
          </Button>
        </Link>
      </SimpleGrid>

      <Box width={{base:"95%", sm:"90%", md:"80%", lg:"70%"}} margin={"auto"} textAlign={"center"} my={10}>
        <Text fontSize={{base:16, sm:16, md:20, lg:22}}>
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
        width={"60%"}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box >
          <Image src="bharatclub.jpeg" alt="BHARAT CLUB"  height={270} />
        </Box>

        <Box justifyContent="center" alignItems="center" fontSize={{base:12, sm:12, md:16, lg:16}}>
          <table
            style={{
              border: "1px solid white",
              borderCollapse: "collapse",
              width: "100%",
              height: "auto",
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
                  Gaming Categories{" "}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  10
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  Bharat Club APK Size{" "}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  18.8 MB
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </SimpleGrid>

      <Box width={"80%"} margin={"auto"} textAlign={"center"} my={10}>
        <Text fontSize={{base:16, sm:16, md:20, lg:22}}>
          For customer support or promotion related query, message Aryah –{" "}
          <Link href="https://t.me/AryahVIPBharatAccount" isExternal>https://t.me/AryahVIPBharatAccount</Link>
        </Text>
      </Box>

      <Box textAlign={"center"} marginTop={5} marginBottom={10}>
        <Link
          href="https://bharatclub.net/#/register?invitationCode=84682491075"
          isExternal
        >
          <Button
            class="button-85"
            role="button"
            style={{ fontSize: 16, fontWeight: 600 }}
          >
            Register Now on Bharat Club App
          </Button>
        </Link>
      </Box>

      <Box justifyContent="center" alignItems="center">
        <Image src="banner.jpeg" alt="BHARAT CLUB BANNER" margin={"auto"} />
      </Box>
    </div>
  );
}

export default App;
