import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132189Page } from './s132189.page';

describe('S132189Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132189Page;
  let fixture: ComponentFixture<S132189Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132189Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132189Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
