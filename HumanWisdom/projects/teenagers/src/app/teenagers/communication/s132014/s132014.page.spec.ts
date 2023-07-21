import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132014Page } from './s132014.page';

describe('S132014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132014Page;
  let fixture: ComponentFixture<S132014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
