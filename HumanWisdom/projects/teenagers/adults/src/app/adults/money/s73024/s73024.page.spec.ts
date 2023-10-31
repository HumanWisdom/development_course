import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73024Page } from './s73024.page';

describe('S73024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73024Page;
  let fixture: ComponentFixture<S73024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
