import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71004Page } from './s71004.page';

describe('S71004Page', () => {
  let component: S71004Page;
  let fixture: ComponentFixture<S71004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
