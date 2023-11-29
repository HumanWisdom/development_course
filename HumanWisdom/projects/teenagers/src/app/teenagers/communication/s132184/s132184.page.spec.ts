import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132184Page } from './s132184.page';

describe('S132184Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132184Page;
  let fixture: ComponentFixture<S132184Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132184Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132184Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
