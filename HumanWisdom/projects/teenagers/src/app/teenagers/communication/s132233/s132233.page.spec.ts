import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132233Page } from './s132233.page';

describe('S132233Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132233Page;
  let fixture: ComponentFixture<S132233Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132233Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132233Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
