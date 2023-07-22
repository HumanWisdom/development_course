import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132223Page } from './s132223.page';

describe('S132223Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132223Page;
  let fixture: ComponentFixture<S132223Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132223Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132223Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
