// 송아지 찾기 : BFS (상태트리탐색)
// "최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성 하세요." => 최단거리 구하기


// dis배열 사용해서 풀기
function solution (s,e){ // start, end
    let answer = 0;
    let check = Array.from({length:10001}, ()=>0); // 직선의 좌표점은 1부터 10,000까지라고 문제에서 얘기했으므로 N+1
    let dis = Array.from({length:10001}, ()=>0); // 이 dis배열 이해하는거 너무 중요해 . 강의 5:38초부터
    let queue = [];                                                                                          
    check[s]=1; // starting point 5를 체크를 하고나서 푸쉬하는거다. 여기서 체크하고
    queue.push(s); // 그 다음에 5를 푸쉬 . 현수의 위치          
    dis[s] = 0;  // 그 다음에 현수의 출발지점을 0이라고 가정한다 .            

    while (queue.length) { // 여기가 0되면 멈춘다. 그치만 그 전에 찾고자 하는 수가 발견되면 멈출수도
        let v = queue.shift(); // 첫 출발좌표 5가 큐에서 빠지겠지
        for(let nv of [v-1, v+1, v+5]) {  // 현수가 다음 갈 수있는 available한 가지
            if (nv===e){ // 다음 간 노드가 end지점이면(14)
                return dis[v]+1; // 자기가 nv이면 자기 부모노드는 v겠지? 아무튼 부모노드의 거리값('dis[v]'에다가 1을 더해준 것을 리턴
            }
            if (nv>0 && nv<=10000 && check[nv]===0) { // 0~10000사이의 수이면서 , 체크가 걸리지 않으면 오케이
                check[nv]=1; // 체크 걸고(다시는 큐에 들어가면 안되니까)
                queue.push(nv);
                dis[nv]=dis[v]+1; // 자기의 거리값('dis[nv]')은 부모노드의 거리값('dis[v]'에다가 1을 더해준 것. 아무튼 도착지점이 아니면 이런식으로 계속 구해주며 가야한다
            }
            queue.push(nv);
        }
    }
    return answer;
}
console.log(solution(5, 14));  // 3. 3번만에 간다는 뜻



// dis배열 사용하지 않고 내가 일반적으로 아는 넓이 우선 탐색을 이용해서 풀기
function solution(s, e){  
    let answer=0;
    let ch=Array.from({length:10001}, ()=>0);
    let queue=[];
    queue.push(s);
    ch[s]=1;
    let L=0;
    while(queue.length){
        let len=queue.length;
        for(let i=0; i<len; i++){
            let x=queue.shift();
            for(let nx of [x-1, x+1, x+5]){
                if(nx===e) return L+1;
                if(nx>0 && nx<=10000 && ch[nx]===0){
                    ch[nx]=1;
                    queue.push(nx);
                }
            }
        }
        L++;
    }
    return answer;
}

console.log(solution(5, 14));