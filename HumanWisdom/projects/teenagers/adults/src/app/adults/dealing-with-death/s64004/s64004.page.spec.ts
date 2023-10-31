import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64004Page } from './s64004.page';

describe('S64004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64004Page;
  let fixture: ComponentFixture<S64004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
