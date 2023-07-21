import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132127Page } from './s132127.page';

describe('S132127Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132127Page;
  let fixture: ComponentFixture<S132127Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132127Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132127Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
