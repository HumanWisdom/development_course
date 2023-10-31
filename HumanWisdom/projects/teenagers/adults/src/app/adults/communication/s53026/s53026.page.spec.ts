import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53026Page } from './s53026.page';

describe('S53026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53026Page;
  let fixture: ComponentFixture<S53026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
