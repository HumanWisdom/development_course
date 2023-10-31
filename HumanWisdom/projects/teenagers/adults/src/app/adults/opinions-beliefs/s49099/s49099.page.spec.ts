import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49099Page } from './s49099.page';

describe('S49099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49099Page;
  let fixture: ComponentFixture<S49099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
