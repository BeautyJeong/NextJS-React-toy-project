'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; /* 아이콘은 따로 설치해줘야 함 */
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4D8829',
        },
    },
});

export default function Home() {
    // input value값 업데이트
    const [email, setEmail] = useState<string>('');
    const [pw, setPw] = useState<string>('');

    //input value값이 유효한지 확인
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [pwValid, setPwValid] = useState<boolean>(false);

    //로그인 버튼 비활성화
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value
        setEmail(emailValue);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(emailValue)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    //emailValid, pwValid state이 변경될 때마다 로그인 버튼 활성화 여부 판단
    useEffect(() => {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid])

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordValue = e.target.value
        setPw(passwordValue);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(passwordValue)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                {/* Container: 화면 가운데로 배치 */}

                <Box sx={{width: 1, display: 'flex', justifyContent: 'center'}}>
                    <Avatar sx={{m: 1, bgcolor: (theme) => theme.palette.primary.main}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                </Box>

                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                    }}
                > {/* Box: div 역할 */}
                    <Typography component="h1" variant="h5">{/*h1태그를 사용하지만 스타일은 h5로*/}
                        이메일과 비밀번호를 입력해주세요
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="이메일을 입력해주세요"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmail}
                    />
                    <Typography>
                        {!emailValid && email.length > 0 && ('올바른 이메일을 입력해주세요.')}
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호를 입력해주세요"
                        type="password"
                        autoComplete="current-password"
                        value={pw}
                        onChange={handlePassword}
                    />
                    <Typography>
                        {!pwValid && pw.length > 0 && ('영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.')}
                    </Typography>
                    <Grid>
                        <FormControlLabel //label 클릭해도 Checkbox가 체크되도록
                            control={<Checkbox value="remember" color="primary"/>}
                            label="로그인 상태 유지"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, bgcolor: (theme) => theme.palette.primary.dark}}
                        disabled={notAllow}
                    >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid item xs>{/*xs: 빈 공간을 다 가져가는 props: flex-grow*/}
                            <Link href="#">
                                비밀번호 찾기
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#">
                                회원가입
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
