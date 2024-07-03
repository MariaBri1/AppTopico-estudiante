import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioPage } from '../../doc_Dentista/horario/horario.page';

describe('HorarioPage', () => {
  let component: HorarioPage;
  let fixture: ComponentFixture<HorarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
