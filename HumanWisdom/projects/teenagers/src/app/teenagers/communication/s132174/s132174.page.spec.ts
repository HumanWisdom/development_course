import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132174Page } from './s132174.page';

describe('S132174Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132174Page;
  let fixture: ComponentFixture<S132174Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132174Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132174Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
