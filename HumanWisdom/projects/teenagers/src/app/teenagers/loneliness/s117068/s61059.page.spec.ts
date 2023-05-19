import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61179Page } from './s61179.page';

describe('S61179Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61179Page;
  let fixture: ComponentFixture<S61179Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61179Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61179Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
