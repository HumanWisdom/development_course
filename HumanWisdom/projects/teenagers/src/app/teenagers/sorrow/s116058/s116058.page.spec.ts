import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116058Page } from './s116058.page';

describe('S116058Page', () => {
      
    let component:  S116058Page;
  let fixture: ComponentFixture<S116058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
