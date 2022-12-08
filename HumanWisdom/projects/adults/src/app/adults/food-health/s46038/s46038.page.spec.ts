import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46038Page } from './s46038.page';

describe('S46038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46038Page;
  let fixture: ComponentFixture<S46038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
