import {test} from 'node:test';import assert from 'node:assert/strict';import {services,slotsForDate,dateKey} from '../dist/data.js';
const now=new Date('2026-10-12T10:00:00');
test('Sunday has no demo times',()=>assert.deepEqual(slotsForDate(new Date('2026-10-18T00:00:00'),60,now),[]));
test('Monday opens at 11 and closes at 19 with service ending before close',()=>{const slots=slotsForDate(new Date('2026-10-12T00:00:00'),120,now);assert.equal(slots[0].value,'11:00');assert.equal(slots.at(-1).value,'17:00');});
test('half-hour opening and service duration respected',()=>{const slots=slotsForDate(new Date('2026-10-13T00:00:00'),150,now);assert.equal(slots[0].value,'09:30');assert.equal(slots.at(-1).value,'16:30');});
test('elapsed times cannot be selected',()=>{const slots=slotsForDate(new Date('2026-10-12T00:00:00'),60,new Date('2026-10-12T14:08:00'));assert.equal(slots[0].value,'14:30');});
test('Friday closes earlier',()=>assert.equal(slotsForDate(new Date('2026-10-16T00:00:00'),90,now).at(-1).value,'16:30'));
test('date keys are local calendar dates',()=>assert.equal(dateKey(new Date(2026,9,12)),'2026-10-12'));
test('service ids are unique',()=>assert.equal(new Set(services.map(s=>s.id)).size,services.length));
