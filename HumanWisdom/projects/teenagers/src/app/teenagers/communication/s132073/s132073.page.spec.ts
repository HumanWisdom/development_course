import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132073Page } from './s132073.page';

describe('S132073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132073Page;
  let fixture: ComponentFixture<S132073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
