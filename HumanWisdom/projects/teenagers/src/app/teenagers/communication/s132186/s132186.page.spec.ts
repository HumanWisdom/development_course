import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132186Page } from './s132186.page';

describe('S132186Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132186Page;
  let fixture: ComponentFixture<S132186Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132186Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132186Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
