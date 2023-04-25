import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107011Page } from './s107011.page';

describe('S107011Page', () => {
  let component: S107011Page;
  let fixture: ComponentFixture<S107011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
