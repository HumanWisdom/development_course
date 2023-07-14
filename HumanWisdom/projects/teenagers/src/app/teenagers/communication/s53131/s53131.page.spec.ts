import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53131Page } from './s53131.page';

describe('S53131Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53131Page;
  let fixture: ComponentFixture<S53131Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53131Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53131Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
