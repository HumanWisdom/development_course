import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73067Page } from './s73067.page';

describe('S73067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73067Page;
  let fixture: ComponentFixture<S73067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
