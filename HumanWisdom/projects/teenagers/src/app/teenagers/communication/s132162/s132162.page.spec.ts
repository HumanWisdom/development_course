import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132162Page } from './s132162.page';

describe('S132162Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132162Page;
  let fixture: ComponentFixture<S132162Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132162Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132162Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
