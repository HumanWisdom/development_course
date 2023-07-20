import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132144Page } from './s132144.page';

describe('S132144Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132144Page;
  let fixture: ComponentFixture<S132144Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132144Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132144Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
