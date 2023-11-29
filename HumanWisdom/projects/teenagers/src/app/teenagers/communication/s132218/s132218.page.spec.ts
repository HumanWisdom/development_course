import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132218Page } from './s132218.page';

describe('S132218Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132218Page;
  let fixture: ComponentFixture<S132218Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132218Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132218Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
