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
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

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
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호를 입력해주세요"
                        type="password"
                        autoComplete="current-password"
                    />
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
                        disabled={true}
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
