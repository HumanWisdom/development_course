import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60108Page } from './s60108.page';

describe('S60108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60108Page;
  let fixture: ComponentFixture<S60108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
