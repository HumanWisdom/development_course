import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45150Page } from './s45150.page';

describe('S45150Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45150Page;
  let fixture: ComponentFixture<S45150Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45150Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45150Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
