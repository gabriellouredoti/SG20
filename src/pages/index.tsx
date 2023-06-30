import { FormEvent, useContext, useState } from "react";
import Head from "next/head";
import loginImg from "../../public/login.svg";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import { canSSRGuest } from "@/utils/canSSRGuest";

//custom components login page
import {
    Box,
    BoxLogin,
    BoxLeftSignIn,
    BoxRightSignIn,
    Row,
    Form,
    Button,
    OptionLogin,
    TextRecovery,
    Mural,
} from "./style";
import {
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
} from "@mui/material";

import { IconUser, IconLock } from "@tabler/icons-react";

export default function Home() {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        if (!email && !password) {
            toast.warning("Preencha todos os campos necessários!");
            return;
        }

        setLoading(true);

        let data = {
            email,
            password,
        };

        await signIn(data);

        setLoading(false);
    }

    return (
        <>
            <Head>
                <title>SIGAE 2.0 - Login</title>
            </Head>
            <Box>
                <BoxLogin>
                    <BoxLeftSignIn>
                        <Mural></Mural>
                    </BoxLeftSignIn>
                    <BoxRightSignIn>
                        <Form onSubmit={handleLogin}>
                            <Row>
                                <Image
                                    src={loginImg}
                                    width={229}
                                    height={321}
                                    alt="Login"
                                ></Image>
                            </Row>
                            <Row>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">
                                        E-mail
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type="text"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconUser />
                                            </InputAdornment>
                                        }
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </FormControl>
                            </Row>
                            <Row>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">
                                        Senha
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type="password"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconLock />
                                            </InputAdornment>
                                        }
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </FormControl>
                            </Row>
                            <Row>
                                <OptionLogin>
                                    Selecione a base de dados
                                </OptionLogin>
                            </Row>
                            <Row>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue="api"
                                    >
                                        <FormControlLabel
                                            value="api"
                                            control={
                                                <Radio
                                                    size="small"
                                                    color="secondary"
                                                />
                                            }
                                            label="Sigae CMM"
                                        />
                                        <FormControlLabel
                                            value="ad"
                                            control={
                                                <Radio
                                                    size="small"
                                                    color="secondary"
                                                />
                                            }
                                            label="Sigae AD"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Row>
                            <Row>
                                <Button type="submit">Entrar</Button>
                            </Row>
                            <Row>
                                <TextRecovery>Esqueci minha senha</TextRecovery>
                            </Row>
                        </Form>
                    </BoxRightSignIn>
                </BoxLogin>
            </Box>
        </>
    );
}

export const getServerSideProps = canSSRGuest(async (context) => {
    return {
        props: {},
    };
});
