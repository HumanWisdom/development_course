import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141026Page } from './s141026.page';

describe('S141026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141026Page;
  let fixture: ComponentFixture<S141026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
