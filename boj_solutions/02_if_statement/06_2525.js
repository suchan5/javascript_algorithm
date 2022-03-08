function solution(h, m, t) {
    m =  m + t;
    while (m >= 60) {  // 60이 넘는동안은 다 이게 적용되게 해야하므로 if가 아니고 while을 썼다
        h++;
        m=m-60;
    }
    if (h === 24) {
        h = 0;
    }
    console.log(h, m);
}
solution(14, 30, 20);
