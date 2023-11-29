import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132131Page } from './s132131.page';

describe('S132131Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132131Page;
  let fixture: ComponentFixture<S132131Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132131Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132131Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
