import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46075Page } from './s46075.page';

describe('S46075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46075Page;
  let fixture: ComponentFixture<S46075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
