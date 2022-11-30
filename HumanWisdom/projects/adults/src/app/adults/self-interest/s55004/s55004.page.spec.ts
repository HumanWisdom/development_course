import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55004Page } from './s55004.page';

describe('S55004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55004Page;
  let fixture: ComponentFixture<S55004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
