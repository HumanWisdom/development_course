import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62190Page } from './s62190.page';

describe('S62190Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62190Page;
  let fixture: ComponentFixture<S62190Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62190Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62190Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
